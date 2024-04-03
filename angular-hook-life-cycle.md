# Angular life cycle hooks
Angular lifecycle hooks are special methods you can implement in your components and directives to perform actions at specific points during their lifecycle. These hooks provide a way to interact with the different stages of a component's creation, change detection, and destruction.

Here's a breakdown of the most **common lifecycle hooks** in Angular:

## 1. ngOnInit:

- This is the most frequently used hook.
- It's called after the component's constructor and after the first change detection cycle.
- This is a good place for any initialization logic that relies on component properties or the DOM being available.
For example, fetching data from a service or subscribing to an observable.
## 2. ngOnChanges:

- This hook is called whenever a data-bound property of the component changes.
- It provides a way to react to changes in input properties.
- You can access the changes object to identify which properties changed and their new and old values.
## 3. ngDoCheck:

- This hook is called during every change detection cycle.
- It allows you to implement custom change detection logic if the default behavior isn't sufficient.
- This is a less commonly used hook due to potential performance implications, so use it with caution.
# 4. ngAfterContentInit:

- This hook is called after the component's content has been projected into the view.
- This is a good place to perform actions that rely on the component's projected content being available.
- Projected content refers to elements or components that are inserted into the component's template using content projection.
# 5. ngAfterContentChecked:

- This hook is called after every change detection cycle if the component's content has changed.
- It allows you to respond to changes in projected content.
# 6. ngAfterViewInit:

- This hook is called after the component's view (including children) has been fully initialized.
- The DOM is now available, and you can interact with it if necessary.
- This is a good place to perform actions that require the DOM to be fully rendered, like accessing element references.
# 7. ngAfterViewChecked:

- This hook is called after every change detection cycle if the component's view has changed.
- It allows you to respond to changes in the component's view.
# 8. ngOnDestroy:

- This hook is called just before the component is destroyed.
- This is a good place to unsubscribe from any subscriptions, release timers, or perform any other cleanup tasks to avoid memory leaks.

- Remember, these hooks are called in a specific order to ensure predictable behavior in your application. By understanding these lifecycle hooks, you can effectively manage the lifecycle of your components and directives in Angular.
