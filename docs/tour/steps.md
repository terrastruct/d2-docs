import CodeBlock from '@theme/CodeBlock';
import Chicken from '@site/static/bespoke-d2/chicken.d2';

# Steps

A "Step" represents a step in a sequence of events.

Each Step inherits from its the Step before it. The first step inherits from its parent,
whether that's a Scenario or Layer.

Notice how in Step 3 for example, the object "Approach road" exists even though it's not
defined, because it was inherited from Step 2, which inherited it from Step 1.

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/chicken.svg2')}}></div>

<CodeBlock className="language-d2-incomplete">
    {Chicken}
</CodeBlock>
