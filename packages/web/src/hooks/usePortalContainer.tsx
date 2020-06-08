import { useMemo } from 'react';

/**
 * Get current element used as ReactPortal's container.
 * @param id - The id attribute of HTMLDivElement.
 */
function getCurrentElement(id: string) {
  return window.document.getElementById(id);
}

/**
 * Creates an element to be used as ReactPortal's container.
 * @param id - The id attribute of HTMLDivElement.
 */
function createContainerElement(id: string) {
  const element = window.document.createElement('div');
  element.setAttribute('id', id);
  window.document.body.appendChild(element);
  return element;
}

/**
 * Hook element used as ReactPortal's container.
 * @param id - The id attribute of HTMLDivElement.
 */
export default function usePortalContainer(id: string) {
  return useMemo(() => getCurrentElement(id) || createContainerElement(id), []);
}
