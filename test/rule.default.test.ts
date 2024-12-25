import { App, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import * as wafv2 from 'aws-cdk-lib/aws-wafv2';
import { WAFIPRestrictRule } from '../src';

describe('Web ACL Rule Global Cope testing', () => {

  const app = new App();
  const stack = new Stack(app, 'TestingStack');

  const allowedIpSet = new wafv2.CfnIPSet(stack, 'AllowedIpSet', {
    addresses: [
      '203.0.113.0/24',
      '198.51.100.0/24',
    ],
    ipAddressVersion: 'IPV4',
    scope: 'REGIONAL',
    name: 'AllowedIpSet',
  });

  const ipRestrictRule = new WAFIPRestrictRule({
    allowIPSetArn: allowedIpSet.attrArn,
  });

  new wafv2.CfnWebACL(stack, 'WebACL', {
    defaultAction: { allow: {} },
    scope: 'CLOUD_FRONT',
    name: 'WebAclWithCustomRules',
    visibilityConfig: {
      cloudWatchMetricsEnabled: true,
      metricName: 'WebAclMetric',
      sampledRequestsEnabled: true,
    },
    rules: [
      ipRestrictRule.allowRule({ priority: 1 }),
      ipRestrictRule.blockRule({ priority: 2 }),
    ],
  });

  it('Should have WAF WebACL Rule', async () => {
    template.hasResourceProperties('AWS::WAFv2::WebACL', {
      Rules: [
        {
          Action: {
            Allow: {},
          },
          Name: 'allow-ip-rule',
          Priority: 1,
          Statement: {
            IPSetReferenceStatement: {
              Arn: {
                'Fn::GetAtt': [
                  Match.stringLikeRegexp('AllowedIpSet'),
                  'Arn',
                ],
              },
            },
          },
          VisibilityConfig: {
            CloudWatchMetricsEnabled: true,
            MetricName: 'AllowIPMetric',
            SampledRequestsEnabled: true,
          },
        },
        {
          Action: {
            Block: {},
          },
          Name: 'block-other-ip-rule',
          Priority: 2,
          Statement: {
            NotStatement: {
              Statement: {
                IPSetReferenceStatement: {
                  Arn: {
                    'Fn::GetAtt': [
                      Match.stringLikeRegexp('AllowedIpSet'),
                      'Arn',
                    ],
                  },
                },
              },
            },
          },
          VisibilityConfig: {
            CloudWatchMetricsEnabled: true,
            MetricName: 'BlockOtherIpMetric',
            SampledRequestsEnabled: true,
          },
        },
      ],
    });
  });

  const template = Template.fromStack(stack);

  it('Should match snapshot', async () => {
    expect(template.toJSON()).toMatchSnapshot();
  });

});