# AWS WAF(V2) IP Restrict Rule

[![GitHub](https://img.shields.io/github/license/gammarers/aws-waf-ip-restrict-rule?style=flat-square)](https://github.com/gammarers/aws-waf-ip-restrict-rule/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@gammarers/aws-waf-ip-restrict-rule?style=flat-square)](https://www.npmjs.com/package/@gammarers/aws-waf-ip-restrict-rule)
[![PyPI](https://img.shields.io/pypi/v/gammarers.aws-waf-ip-restrict-rule?style=flat-square)](https://pypi.org/project/gammarers.aws-waf-ip-restrict-rule/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/gammarers/aws-waf-ip-restrict-rule/release.yml?branch=main&label=release&style=flat-square)](https://github.com/gammarers/aws-waf-ip-restrict-rule/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/gammarers/aws-waf-ip-restrict-rule?sort=semver&style=flat-square)](https://github.com/gammarers/aws-waf-ip-restrict-rule/releases)

[![View on Construct Hub](https://constructs.dev/badge?package=@gammarers/aws-waf-ip-restrict-rule)](https://constructs.dev/packages/@gammarers/aws-waf-ip-restrict-rule)

This is an AWS CDK Construct for IP Restrict Rule on WAF V2

## Install

### TypeScript

#### install by npm

```shell
npm install @gammarers/aws-waf-ip-restrict-rule
```

#### install by yarn

```shell
yarn add @gammarers/aws-waf-ip-restrict-rule
```

### Python

```shell
pip install gammarers.aws-waf-ip-restrict-rule
```

## Example

```typescript
import { WAFIPRestrictRule } from '@gammarers/aws-waf-ip-restrict-rule';

const allowedIpSet = new wafv2.CfnIPSet(stack, 'AllowedIpSet', {
  addresses: [
    '203.0.113.0/24',
    '198.51.100.0/24',
  ],
  ipAddressVersion: 'IPV4',
  scope: 'CLOUDFRONT',
  name: 'AllowedIpSet',
});

const ipRestrictRule = new WAFIPRestrictRule({
  allowIPSetArn: allowedIpSet.attrArn,
});

new wafv2.CfnWebACL(stack, 'WebACL', {
  defaultAction: { allow: {} },
  scope: 'CLOUDFRONT',
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

```

## License

This project is licensed under the Apache-2.0 License.
