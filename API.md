# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### RuleConfig <a name="RuleConfig" id="@gammarers/aws-waf-ip-restrict-rule.RuleConfig"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-waf-ip-restrict-rule.RuleConfig.Initializer"></a>

```typescript
import { RuleConfig } from '@gammarers/aws-waf-ip-restrict-rule'

const ruleConfig: RuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-waf-ip-restrict-rule.RuleConfig.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@gammarers/aws-waf-ip-restrict-rule.RuleConfig.property.cloudWatchMetricsName">cloudWatchMetricsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-waf-ip-restrict-rule.RuleConfig.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |

---

##### `priority`<sup>Required</sup> <a name="priority" id="@gammarers/aws-waf-ip-restrict-rule.RuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `cloudWatchMetricsName`<sup>Optional</sup> <a name="cloudWatchMetricsName" id="@gammarers/aws-waf-ip-restrict-rule.RuleConfig.property.cloudWatchMetricsName"></a>

```typescript
public readonly cloudWatchMetricsName: string;
```

- *Type:* string

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@gammarers/aws-waf-ip-restrict-rule.RuleConfig.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

### WAFIPRestrictRuleProps <a name="WAFIPRestrictRuleProps" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleProps"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleProps.Initializer"></a>

```typescript
import { WAFIPRestrictRuleProps } from '@gammarers/aws-waf-ip-restrict-rule'

const wAFIPRestrictRuleProps: WAFIPRestrictRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleProps.property.allowIPSetArn">allowIPSetArn</a></code> | <code>string</code> | *No description.* |

---

##### `allowIPSetArn`<sup>Required</sup> <a name="allowIPSetArn" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleProps.property.allowIPSetArn"></a>

```typescript
public readonly allowIPSetArn: string;
```

- *Type:* string

---

## Classes <a name="Classes" id="Classes"></a>

### WAFIPRestrictRule <a name="WAFIPRestrictRule" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule"></a>

#### Initializers <a name="Initializers" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule.Initializer"></a>

```typescript
import { WAFIPRestrictRule } from '@gammarers/aws-waf-ip-restrict-rule'

new WAFIPRestrictRule(props: WAFIPRestrictRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule.Initializer.parameter.props">props</a></code> | <code><a href="#@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleProps">WAFIPRestrictRuleProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule.Initializer.parameter.props"></a>

- *Type:* <a href="#@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleProps">WAFIPRestrictRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule.allowRule">allowRule</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule.blockRule">blockRule</a></code> | *No description.* |

---

##### `allowRule` <a name="allowRule" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule.allowRule"></a>

```typescript
public allowRule(config: RuleConfig): RuleProperty
```

###### `config`<sup>Required</sup> <a name="config" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule.allowRule.parameter.config"></a>

- *Type:* <a href="#@gammarers/aws-waf-ip-restrict-rule.RuleConfig">RuleConfig</a>

---

##### `blockRule` <a name="blockRule" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule.blockRule"></a>

```typescript
public blockRule(config: RuleConfig): RuleProperty
```

###### `config`<sup>Required</sup> <a name="config" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule.blockRule.parameter.config"></a>

- *Type:* <a href="#@gammarers/aws-waf-ip-restrict-rule.RuleConfig">RuleConfig</a>

---





