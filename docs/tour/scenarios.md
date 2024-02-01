import CodeBlock from '@theme/CodeBlock';
import Animated from '@site/static/bespoke-d2/animated.d2';

# Scenarios

A "Scenario" represents a different view of the base Layer.

Each Scenario inherits from its base Layer. Any new objects are added onto all objects in
the base Layer, and you can reference any objects from the base Layer to update them.

Notice that in the below Scenario, we simply turn some objects opacity lower, and define a
new connection to show an alternate view of the deployment diagram.

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/animated.svg2')}}></div>

<CodeBlock className="language-d2-incomplete">
    {Animated}
</CodeBlock>
