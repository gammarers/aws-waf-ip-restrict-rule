# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WAFIPRestrictRule <a name="WAFIPRestrictRule" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule"></a>

#### Initializers <a name="Initializers" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule.Initializer"></a>

```typescript
import { WAFIPRestrictRule } from '@gammarers/aws-waf-ip-restrict-rule'

new WAFIPRestrictRule(scope: Construct, id: string, props: WAFIPRestrictRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule.Initializer.parameter.props">props</a></code> | <code><a href="#@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleProps">WAFIPRestrictRuleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule.Initializer.parameter.props"></a>

- *Type:* <a href="#@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleProps">WAFIPRestrictRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule.isConstruct"></a>

```typescript
import { WAFIPRestrictRule } from '@gammarers/aws-waf-ip-restrict-rule'

WAFIPRestrictRule.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule.property.rule">rule</a></code> | <code>aws-cdk-lib.aws_wafv2.CfnWebACL.RuleProperty</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRule.property.rule"></a>

```typescript
public readonly rule: RuleProperty;
```

- *Type:* aws-cdk-lib.aws_wafv2.CfnWebACL.RuleProperty

---


## Structs <a name="Structs" id="Structs"></a>

### WAFIPRestrictRuleProps <a name="WAFIPRestrictRuleProps" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleProps"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleProps.Initializer"></a>

```typescript
import { WAFIPRestrictRuleProps } from '@gammarers/aws-waf-ip-restrict-rule'

const wAFIPRestrictRuleProps: WAFIPRestrictRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleProps.property.allowIpAddresses">allowIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleProps.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleProps.property.scope">scope</a></code> | <code><a href="#@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleScope">WAFIPRestrictRuleScope</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleProps.property.allowIpSetName">allowIpSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleProps.property.cloudWatchMetricsName">cloudWatchMetricsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleProps.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |

---

##### `allowIpAddresses`<sup>Required</sup> <a name="allowIpAddresses" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleProps.property.allowIpAddresses"></a>

```typescript
public readonly allowIpAddresses: string[];
```

- *Type:* string[]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleProps.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleProps.property.scope"></a>

```typescript
public readonly scope: WAFIPRestrictRuleScope;
```

- *Type:* <a href="#@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleScope">WAFIPRestrictRuleScope</a>

---

##### `allowIpSetName`<sup>Optional</sup> <a name="allowIpSetName" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleProps.property.allowIpSetName"></a>

```typescript
public readonly allowIpSetName: string;
```

- *Type:* string

---

##### `cloudWatchMetricsName`<sup>Optional</sup> <a name="cloudWatchMetricsName" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleProps.property.cloudWatchMetricsName"></a>

```typescript
public readonly cloudWatchMetricsName: string;
```

- *Type:* string

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleProps.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---



## Enums <a name="Enums" id="Enums"></a>

### WAFIPRestrictRuleScope <a name="WAFIPRestrictRuleScope" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleScope"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleScope.GLOBAL">GLOBAL</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleScope.REGIONAL">REGIONAL</a></code> | *No description.* |

---

##### `GLOBAL` <a name="GLOBAL" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleScope.GLOBAL"></a>

---


##### `REGIONAL` <a name="REGIONAL" id="@gammarers/aws-waf-ip-restrict-rule.WAFIPRestrictRuleScope.REGIONAL"></a>

---

