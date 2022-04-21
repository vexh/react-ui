import React, { useState } from "react";
import Icon from "../../lib/icon/icon";
import Highlight, { defaultProps } from "prism-react-renderer";

export default function IconExample() {
  const [codeShow, setCodeShow] = useState(false);
  const code = require("!!raw-loader!./icon.example.tsx");
  console.log(code.default);
  return (
    <div>
      <Icon name={"wechat"}></Icon>
      <Icon name={"alipay"}></Icon>
      <Icon name={"qq"}></Icon>
      <button onClick={() => setCodeShow(!codeShow)}>显示代码</button>
      {codeShow && (
        <Highlight {...defaultProps} code={code.default} language="jsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      )}
    </div>
  );
}
