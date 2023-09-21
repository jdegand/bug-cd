# Bug Cd

[Angular Challenges](https://github.com/tomalaforge/angular-challenges) #32 Bug Change Detection Solution

## Built With

- [Angular](https://angular.io)
- [Angular CLI](https://github.com/angular/angular-cli) version 16.2.2.

## Directions

In this small application, we have a navigation menu to route our application to either `barComponent` or `FooComponent`. However our application is not loading and no errors are displayed inside the console.

### Statement

The goal of the challenge is to debug this application and make it work.

#### Hints

<details>
  <summary>Hint 1</summary>
  
  If you comment out `routerLinkActive="isSelected"` inside `NavigationComponent`: the application loads correctly.
</details>

<details>
  <summary>Hint 2</summary>

If you open the [`RouterLinkActive` source code](https://github.com/angular/angular/blob/main/packages/router/src/directives/router_link_active.ts) and go to **line 196**, Angular is calling `this.cdr.markForCheck` inside a microTask which triggers a new CD cycle. If you comment out this line, the application loads again, however the bug is not inside the Angular Framework. 

</details>

## Thoughts

- App is slow and you can't refresh it. 
- I didn't like the order of the routes so I changed them.  Although it doesn't really matter in this case, I always prefer to have empty routes at the bottom (with a wildcard route as the final route).  
- Having getMenu function calls inside the template is a problem.   
- Use a pipe ?   
- The fake backend response (string) actually makes this harder to fix.  You have will have typing errors if try to just pass the string response to menus.  
- I think using ngOnChanges is probably the solution Thomas had in mind.
- However, I found some great articles and there is an easy fix.  Use a memo function and you can keep the function calls in the template.  See [this article](https://itnext.io/its-ok-to-use-function-calls-in-angular-templates-ffdd12b0789e) for the memo function and explanation.

## Useful Resources

- [Angular Docs](https://angular.io/api/router/RouterLinkActive#description) - RouterLinkActive
- [Stack Overflow](https://stackoverflow.com/questions/33520043/how-to-detect-a-route-change-in-angular) - how to detect a route change in angular
- [Stack Overflow](https://stackoverflow.com/questions/57916707/angular-8-ui-observable-not-triggering-change-detection-changedetectionstrateg) - angular 8 observable not triggering change detection
- [Stack Overflow](https://stackoverflow.com/questions/41364386/whats-the-difference-between-markforcheck-and-detectchanges) - whats the difference between markForCheck and detectChanges ?
- [Medium](https://medium.com/@andre.schouten_ff/whats-the-difference-between-markforcheck-and-detectchanges-in-angular-fff4e5f54d34) - difference between markForCheck and detectChanges
- [Medium](https://medium.com/showpad-engineering/why-you-should-never-use-function-calls-in-angular-template-expressions-e1a50f9c0496#:~:text=In%20this%20article%2C%20we%20learned,calls%20in%20Angular%20template%20expressions.) - why you should never use function calls in angular template expressions
- [Blog](https://itnext.io/its-ok-to-use-function-calls-in-angular-templates-ffdd12b0789e) - its ok to use function calls in angular templates