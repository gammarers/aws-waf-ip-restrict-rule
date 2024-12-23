import { App, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import * as wafv2 from 'aws-cdk-lib/aws-wafv2';
import { WAFIPRestrictRuleScope, WAFIPRestrictRule } from '../src';

describe('Web ACL Rule Global Cope testing', () => {

  const app = new App();
  const stack = new Stack(app, 'TestingStack');

  const ipRestrictRule = new WAFIPRestrictRule(stack, 'WAFIPRestrictRule', {
    allowIpAddresses: [
      '192.0.2.0/24',
      '198.51.100.0/24',
      '203.0.113.0/24',
    ],
    scope: WAFIPRestrictRuleScope.GLOBAL,
    priority: 1,
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
    rules: [ipRestrictRule.rule],
  });

  it('Should have WAF IPSet', async () => {
    template.hasResourceProperties('AWS::WAFv2::IPSet', {
      Addresses: [
        '192.0.2.0/24',
        '198.51.100.0/24',
        '203.0.113.0/24',
      ],
      IPAddressVersion: 'IPV4',
      Name: 'allow-ip-set',
      Scope: 'CLOUDFRONT',
    });
  });

  it('Should have WAF WebACL Rule', async () => {
    template.hasResourceProperties('AWS::WAFv2::WebACL', {
      Rules: [
        {
          Action: {
            Block: {},
          },
          Name: 'block-ip-rule',
          Priority: 1,
          Statement: {
            IPSetReferenceStatement: {
              Arn: {
                'Fn::GetAtt': [
                  Match.stringLikeRegexp('WAFIPRestrictRule'),
                  'Arn',
                ],
              },
            },
          },
          VisibilityConfig: {
            CloudWatchMetricsEnabled: true,
            MetricName: 'BlockIPMetric',
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