import { useSelector } from "react-redux";
/*

    Previous, this was to be an interface for a custom facade around state library hooks, but after
    further research of various state libraries that have APIs for react, it seems like only redux and zustand would really
    work with such a pattern. However, not so much other state libraries such as MobX. Libraries in JS often come across as really 
    opinionated and thus may hard couple you to their patterns, and making facades may sort of pull out the fundamental complexity their original
    APIs abstracted in the first place.

    thus, the important thing here is being able to define a standard interface for the LSP to then use when looking for inconsistencies
    but not go overly far in designing a really complex facade. This is enough for defining an interface on react component prop interfaces, which ultimately
    such a theoretical facade hook for state would be injected as.

    for instance:

    interface SomeComponentProps_Interface
    {
        logger: Logger_Interface,
        createInvocationId: invocationIdFactory_Interface,

        someService: SomeService_Interface
        useDomainState: UseDomainState_LambdaInterface
    }
*/

export type UseDomainState_LambdaInterface = typeof useSelector;
