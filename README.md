# Lifecycle Methods

React provides special lifecycle methods for class components, which are called when components are mounted, updated or unmounted.

**Mounting** is the process when a component is rendered on the page.
**Unmounting** is the process when a component is removed from the page.

The **componentDidMount** method is called when a component is rendered on the page.

For example, we can use componentDidMount in our Counter app to set the initial value of the counter

**componentDidMount** is typically used for populating the state inside of a component when it initially mounts to the DOM.

Similarly, the **componentWillUnmount()** lifecycle method is called right before the component is removed from the DOM. It can be used to free up resources taken by the component.

Another lifecycle method is **componentDidUpdate()**, which is called when a component is updated in the DOM.

**componentDidUpdate()** is only called when the component is updated.

The lifecycle methods we covered are only available for class components.
However, React provides a special Hook called **useEffect** to make lifecycle methods available in functional components. It combines the componentDidMount, componentDidUpdate, and componentWillUnmount methods into one.