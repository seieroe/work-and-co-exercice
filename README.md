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
APP-----------------------
      |                  |
      CartContainer      ProductsContainer-------------------
      |                                     |               |
      Cart                                 ProductItem      ProductList
                                            |
                                            Product

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

Note: You're encouraged to show your work by including multiple commits - we'll be looking through your git history.

## Tasks

1. [Implement Responsive Design](/tasks/01-responsive-design.md)
2. [Enhance Cart Functionality](/tasks/02-cart-enhancements.md)
3. [Hook Up Product API](/tasks/03-product-api.md)

You're welcome (but not required) to add any libraries you think would be helpful.

Please also update this README file: we'd love to see notes on your decision-making process, links to the most exciting pieces of code, or anything else that will give us additional context when reviewing your assessment.
