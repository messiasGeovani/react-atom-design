import dashify from "dashify";

interface ICreateAttributeParams {
  block: string;
  element?: string;
  context?: string;
}

export function createTestAttribute({
  block: blockPart,
  element,
  context,
}: ICreateAttributeParams): string | void {
  if (!blockPart) {
    return;
  }

  const elementPart = element ? `:${dashify(element)}` : "";
  const contextPart = context ? `::${dashify(context)}` : "";

  return `${blockPart}${elementPart}${contextPart}`;
}
