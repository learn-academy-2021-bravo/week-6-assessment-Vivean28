# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: The foreign key is a part of the Animal and that is how they share the similarity and that is how they are conected to each other.

  Researched answer: It uses a column that conncet to columns that is used establish link between the data in two tables to control the data that can be stored in the foreign key table.



2. Which RESTful routes must always be passed params? Why?

  Your answer: This is the CRUD and the HTTP 
  create ---> post    creates a somthing new
  read ----> get        display a list 
  update ----> patch/put    updates a specific thing


  Researched answer:  This is the CRUD and the HTTP 
  create ---> post    creates a somthing new
  read ----> get        display a list 
  update ----> patch/put    updates a specific thing



3. Name three rails generator commands. What is created by each?

  Your answer: 
  - rails db:create                
   it will create the database 
 
  - rails db:migrate 
  with out doing this step I will not be able to see the database that I have created                
  

  - rails destroy                  
  it will destroy what ever I pass it


  - rails console or rails c       
  it will put me in the rails concel

  Researched answer: 

   Your answer: 
  - rails db:create                
   it will create the database thsi is when I add the values example would be name vivean, last Ha, and so on
 
  - rails db:migrate               
   is a tool for changingan application's database schema

  - rails destroy                  
  it will destroy what ever I pass it


  - rails console or rails c       
  it will put me in the rails concel



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students        
This will get  and show all the students

method="GET"    /students/2       
this will get the second id in the in the students

method="GET"    /students/new      
return an HTML form for creating a new student 

method="GET"    /students/edit/2    
return an HTML form for editing the second key and the it will always be changed 

method="POST"   /students/  
this will create the a new student      

method="PATCH"  /students/2 
this is going to updated the second student      

method="DELETE" /students/2  
this will delete the second student and it't place will not be taken by other key     



5. As a developer, you want to make an application that will help you manage your to do list. To get started, you want to create the API. Create 10 user stories that will help you get your application started.

- Story: As the consumer of the API I can create a do List and save it in the database.

- Story: in my List I have the following information 
list_name:string 
list_price:string 
list_time:string

- Story: Story: As the consumer of the API I can list all my List info in the database.
I am going to do that using Rails Console
list_name "shopping", list_price "$40", list_time "2 hours"


- Story:As the consumer of the API I can update my List in the list_time "3 hours" in the database.

- Story: As the consumer of the API I can destroy a one thisg in my List in the database.


- Story: As the consumer of the API I can create a sighting of a list in the List with date

- Story: As the consumer of the API I can update a list sighting in the database.

- Story:  As the consumer of the API I can destroy a place in my list sighting in the database.

- Story: As the consumer of the API, when I view a specific place in the list , I can also see a list sightings of that list.

- Story: As the consumer of the API, I can run a report to list all sightings during a given time period