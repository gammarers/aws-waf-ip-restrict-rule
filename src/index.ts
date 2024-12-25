import * as wafv2 from 'aws-cdk-lib/aws-wafv2';

export interface RuleConfig {
  readonly priority: number;
  readonly ruleName?: string;
  readonly cloudWatchMetricsName?: string;
}

export interface WAFIPRestrictRuleProps {
  readonly allowIPSetArn: string;
}

export class WAFIPRestrictRule {

  constructor(private props: WAFIPRestrictRuleProps) {
  }

  allowRule(config: RuleConfig): wafv2.CfnWebACL.RuleProperty {
    return {
      name: config.ruleName || 'allow-ip-rule',
      priority: config.priority,
      action: { allow: {} },
      visibilityConfig: {
        cloudWatchMetricsEnabled: true,
        metricName: config.cloudWatchMetricsName || 'AllowIPMetric',
        sampledRequestsEnabled: true,
      },
      statement: {
        ipSetReferenceStatement: {
          arn: this.props.allowIPSetArn,
        },
      },
    };
  }

  blockRule(config: RuleConfig): wafv2.CfnWebACL.RuleProperty {
    return {
      name: config.ruleName || 'block-other-ip-rule',
      priority: 2,
      action: { block: {} }, // 拒否アクション
      visibilityConfig: {
        cloudWatchMetricsEnabled: true,
        metricName: config.cloudWatchMetricsName || 'BlockOtherIpMetric',
        sampledRequestsEnabled: true,
      },
      statement: {
        notStatement: {
          statement: {
            ipSetReferenceStatement: {
              arn: this.props.allowIPSetArn,
            },
          },
        },
      },
    };
  }
}
