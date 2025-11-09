import { useEffect, RefObject } from "react";

/**
 * Custom hook for managing keyboard navigation in lists/menus
 * @param isOpen - Whether the menu/list is open
 * @param itemsCount - Number of items in the list
 * @param onSelect - Callback when an item is selected
 * @param onClose - Callback to close the menu
 */
export const useKeyboardNavigation = (
    isOpen: boolean,
    itemsCount: number,
    onSelect: (index: number) => void,
    onClose: () => void
) => {
    useEffect(() => {
        if (!isOpen) return;

        let currentIndex = -1;

        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case "ArrowDown":
                    e.preventDefault();
                    currentIndex = (currentIndex + 1) % itemsCount;
                    // Focus the next item
                    break;

                case "ArrowUp":
                    e.preventDefault();
                    currentIndex =
                        currentIndex <= 0 ? itemsCount - 1 : currentIndex - 1;
                    // Focus the previous item
                    break;

                case "Enter":
                case " ":
                    e.preventDefault();
                    if (currentIndex >= 0) {
                        onSelect(currentIndex);
                    }
                    break;

                case "Escape":
                    e.preventDefault();
                    onClose();
                    break;

                case "Home":
                    e.preventDefault();
                    currentIndex = 0;
                    break;

                case "End":
                    e.preventDefault();
                    currentIndex = itemsCount - 1;
                    break;
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, itemsCount, onSelect, onClose]);
};

/**
 * Custom hook for focus trap - keeps focus within a container
 * @param containerRef - Reference to the container element
 * @param isActive - Whether the focus trap is active
 */
export const useFocusTrap = (
    containerRef: RefObject<HTMLElement>,
    isActive: boolean
) => {
    useEffect(() => {
        if (!isActive || !containerRef.current) return;

        const container = containerRef.current;
        const focusableElements = container.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        const handleTabKey = (e: KeyboardEvent) => {
            if (e.key !== "Tab") return;

            if (e.shiftKey) {
                // Shift + Tab
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement?.focus();
                }
            } else {
                // Tab
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement?.focus();
                }
            }
        };

        // Focus first element when trap activates
        firstElement?.focus();

        container.addEventListener("keydown", handleTabKey as EventListener);
        return () =>
            container.removeEventListener(
                "keydown",
                handleTabKey as EventListener
            );
    }, [containerRef, isActive]);
};

/**
 * Custom hook to announce content to screen readers
 * @param message - Message to announce
 * @param priority - Announcement priority (polite or assertive)
 */
export const useScreenReaderAnnouncement = (
    message: string,
    priority: "polite" | "assertive" = "polite"
) => {
    useEffect(() => {
        if (!message) return;

        const announcement = document.createElement("div");
        announcement.setAttribute("role", "status");
        announcement.setAttribute("aria-live", priority);
        announcement.setAttribute("aria-atomic", "true");
        announcement.style.position = "absolute";
        announcement.style.left = "-9999px";
        announcement.textContent = message;

        document.body.appendChild(announcement);

        const timeout = setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);

        return () => {
            clearTimeout(timeout);
            if (document.body.contains(announcement)) {
                document.body.removeChild(announcement);
            }
        };
    }, [message, priority]);
};
