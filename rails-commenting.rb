# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# This is coming from the app and the the controller

class BlogPostsController < ApplicationController
  def index
    # ---2)
    # In this medthod we are creating an instance varabal that is making an active record call. The variabal is a list of an array using the view to pull out all the information that we need from it.
    @posts = BlogPost.all
  end

  def show
    # ---3)
    # In this method we are getting back one thing that and that will be what ever in passed in the params id. The reason why we are making a params is because we want it to be dinamic and not hard coded. Then we will search the active record and it will look for the id that we will be passing it
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # building a form first, here, we are creating a new thing. This will instance variabal, it is creating an action that we will be creating a new thing. This will be a get request 
  def new
    @post = Post.new
  end

  def create
    # ---5)
    # Create is a RESTful route that submits user data to the database. this will be the  post request.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)
  # Here I am saying when given the id I want to edit it depening what will be passed in the params
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # This will update what we need based on the id that we are going to pass it

    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) 
      # this will destroy or delete the id that we will be passing it, and it's place will not be taken by another key.
      This here is in case the if coditional does not pass 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # This is the strong param
  private
  def blog_post_params
    # ---10)
    # this is saying you can only add data to the columns that I am telling you here that  way the user does connot add anything they want only what we are allowing.
    params.require(:blog_post).permit(:title, :content)
  end

end
