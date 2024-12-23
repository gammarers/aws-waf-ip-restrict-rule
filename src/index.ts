import * as wafv2 from 'aws-cdk-lib/aws-wafv2';
import { Construct } from 'constructs';

export enum WAFIPRestrictRuleScope {
  GLOBAL = 'Global',
  REGIONAL = 'Regional',
}

export interface WAFIPRestrictRuleProps {
  readonly allowIpSetName?: string;
  readonly allowIpAddresses: string[];
  readonly scope: WAFIPRestrictRuleScope;
  readonly priority: number;
  readonly ruleName?: string;
  readonly cloudWatchMetricsName?: string;
}

export class WAFIPRestrictRule extends Construct {

  public readonly rule: wafv2.CfnWebACL.RuleProperty;

  constructor(scope: Construct, id: string, props: WAFIPRestrictRuleProps) {
    super(scope, id);
    // IPSet を作成
    const ipSet = new wafv2.CfnIPSet(this, 'IPSet', {
      addresses: props.allowIpAddresses,
      ipAddressVersion: 'IPV4',
      scope: ((): string => {
        switch (props.scope) {
          case WAFIPRestrictRuleScope.GLOBAL:
            return 'CLOUDFRONT';
          case WAFIPRestrictRuleScope.REGIONAL:
            return 'REGIONAL';
        }
      })(),
      name: props.allowIpSetName || 'allow-ip-set',
    });

    this.rule = {
      name: props.ruleName || 'block-ip-rule',
      priority: props.priority,
      action: { block: {} },
      visibilityConfig: {
        cloudWatchMetricsEnabled: true,
        metricName: props.cloudWatchMetricsName || 'BlockIPMetric',
        sampledRequestsEnabled: true,
      },
      statement: {
        ipSetReferenceStatement: {
          arn: ipSet.attrArn,
        },
      },
    };
  }
}
