import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  p: (props) => <p className="indent-8" {...props} />,
}

export function useMDXComponents(): MDXComponents {
    return components;
}