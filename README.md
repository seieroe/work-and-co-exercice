My Process!

The setup of this assessment was the first challenge for me, I have not pushed one repository into another empty repository before.  In addition to the described
```
git remote add origin git@github.com:my-username/my-assessment.git
git push -u origin master
```
I used
```
git remote rm origin
```
to remove the Work&Co repository as the origin and set my new empty repository as the origin.

Next, I created the component hierarchy for my reference, illustrated below.  
#COMPONENTS:
APP----------------
  |               |
  CartContainer   ProductsContainer-
  |               |               |
  Cart            ProductItem     ProductList
  |               |
  Product         Product

My terminal was linked to the wrong GitHub account, a secondary account that I set up at some time.  I remedied this issue by changing the settings in my terminal to the email associated with the correct GitHub account.
```
git config --global user.email e.e.seieroe@gmail.com
```
I did an extra commit just to make sure everything is linked properly.

Now it is time to begin the first task, Implement Responsive Design.


I decided I want to install Bootstrap for React to help me style, so I went to
https://react-bootstrap.github.io/ to get started.
```
npm install react-bootstrap bootstrap
```
I also created a CSS file for custom styling.
I also downloaded sketch as per the instructions, from https://www.sketchapp.com/ onto my computer so I could open the sketch file.
The bootstrap imports were resulting in failure to compile, so I decided to focus more on the custom CSS.

I was getting more failure to compile and had to update the CSS loader, as well as install prop-types module.
```
npm install --save prop-types
```
CSS is a challenge for me so I decided to look at some of  the other forked repositories to check out some good solutions.  For the product images, I decided to create a new component ProductImage, an idea I got from reviewing the code of @triciacodes. ProductImage takes the prop of { product } from ProductItem, and I also made all the proper channels to link the ProductItem component into the project.

For the modal, I decided to use the Reach UI modal library (built by Ryan Florence, the creator of React Router) which helps me because it is 100% compliant for accessibility, and also because I have never built a modal using Redux.  
While commiting this change, I made a commit message error and I wanted to change the message before I pushed.
I used ``` git commit --amend ``` to do this which I have never done before!

Once I got the modal working I needed to render the cart inside of the modal.  In the Product component, I conditionally rendered the product with increment, decrement and remove buttons if it is being rendered by cart instead of being rendered by ProductItem.
I gave each item in the cart a unique ID by using
```
 productId: Math.random()*10000000000000000    
```
in the reducer when each item is added to the cart.  I made many other small changes to make sure the cart had all the parts showing that were meant to be showing.

I then began work on the increment and decrement feature of the cart.  The quantity of items in the cart is being held in the store, a functionality that was given to me, so I only needed to link this information to the increment and decrement actions.
I created ActionTypes of INCREMENT , DECREMENT , and REMOVE_FROM_CART in the constants/ActionTypes.js.  Then in actions/index.js I defined these functions.





# Work & Co Web Code Assessment

This is a copy of the [Redux Shopping Cart Example](https://github.com/reactjs/redux/tree/master/examples/shopping-cart).

To install dependencies, use the package manager [Yarn](https://yarnpkg.com/en/):

```
yarn
```

To start a development server:

```
yarn start
```

## Setup

Please create a new, public Github repository where your assessment can be reviewed. We recommend the following steps:

- Create a repository on your personal Github. Make sure the `Initialize this repository with a README` box is unchecked.
- Visit your new repository. Copy the `…or push an existing repository from the command line` code provided and run it in your terminal in the same directory as this README file. It will look something like this:

```
git remote add origin git@github.com:my-username/my-assessment.git
git push -u origin master
```


#SECOND TASK -- Enhance Cart Functionality

- Remove an item
This is going to be a
- Update an item quantity


Note: You're encouraged to show your work by including multiple commits - we'll be looking through your git history.

## Tasks

1. [Implement Responsive Design](/tasks/01-responsive-design.md)
2. [Enhance Cart Functionality](/tasks/02-cart-enhancements.md)
3. [Hook Up Product API](/tasks/03-product-api.md)

You're welcome (but not required) to add any libraries you think would be helpful.

Please also update this README file: we'd love to see notes on your decision-making process, links to the most exciting pieces of code, or anything else that will give us additional context when reviewing your assessment.
