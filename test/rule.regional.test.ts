import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as wafv2 from 'aws-cdk-lib/aws-wafv2';
import { WAFIPRestrictRuleScope, WAFIPRestrictRule } from '../src';

describe('Web ACL Rule Regional scope testing', () => {

  const app = new App();
  const stack = new Stack(app, 'TestingStack');

  const ipRestrictRule = new WAFIPRestrictRule(stack, 'WAFIPRestrictRule', {
    allowIpAddresses: [
      '192.0.2.0/24',
      '198.51.100.0/24',
      '203.0.113.0/24',
    ],
    scope: WAFIPRestrictRuleScope.REGIONAL,
    priority: 1,
  });

  new wafv2.CfnWebACL(stack, 'WebACL', {
    defaultAction: { allow: {} },
    scope: 'REGIONAL',
    name: 'WebAclWithCustomRules',
    visibilityConfig: {
      cloudWatchMetricsEnabled: true,
      metricName: 'WebAclMetric',
      sampledRequestsEnabled: true,
    },
    rules: [ipRestrictRule.rule],
  });

  const template = Template.fromStack(stack);

  it('Should have WAF IPSet', async () => {
    template.hasResourceProperties('AWS::WAFv2::IPSet', {
      Addresses: [
        '192.0.2.0/24',
        '198.51.100.0/24',
        '203.0.113.0/24',
      ],
      IPAddressVersion: 'IPV4',
      Name: 'allow-ip-set',
      Scope: 'REGIONAL',
    });
  });

  it('Should match snapshot', async () => {
    expect(template.toJSON()).toMatchSnapshot();
  });

});