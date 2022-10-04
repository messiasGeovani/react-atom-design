import dashify from "dashify";

export interface IExtractIdentifierParams {
  block: string;
  element?: string;
  context?: string;
}

export function extractIdentifier({
  block: blockPart,
  element,
  context,
}: IExtractIdentifierParams): string | void {
  if (!blockPart) {
    return;
  }

  const elementPart = element ? `:${dashify(element)}` : "";
  const contextPart = context ? `::${dashify(context)}` : "";

  return `${blockPart}${elementPart}${contextPart}`;
}

export function testOnDesktopAndMobile(
  description: string,
  runTest: (isDesktopRun: boolean) => void,
  { only = false } = {}
) {
  const testFunction = only ? it.only : it;

  testFunction(`[DESKTOP] ${description}`, () => {
    const isDesktopRun = true;
    runTest(isDesktopRun);
  });

  testFunction(`[MOBILE] ${description}`, () => {
    cy.viewport("iphone-x");
    const isDesktopRun = false;
    runTest(isDesktopRun);
  });
}
