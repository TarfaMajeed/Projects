'''
import csv
#csv file from dictionaries
#create a list of dictionaries
employee=[{'name':'tahir', 'role':'developer', 'company':"scaler"},
          {'name':'amir','role':'developer', 'company':"scaler"},
          {'name':'jungkook','role':'programmer', 'company':"google"}]

#open file with write mode #file is object
with open('test.csv','w') as file:
    #write all dic of employee[0] keys in a file with commas seperated values as a column
    file.write(','.join(employee[0].keys()))
    file.write('\n')    #ADD A NEW LINE
    for row in employee:
        #WRITE THE VALUES IN A ROW
     file.write(','.join(str(x) for x in row.values()))
     file.write('\n') # add a new line

'''

import csv
import pandas as pd  #pd is object
import numpy as np  #np is object

'''
nme=["anmol","tarfa"]
deg=["programmer","cs"]
scr=[60,70]

#dictionary of lists
dict={'name':nme,'role':deg,'score':scr}

df=pd.DataFrame(dict) #datafram make 2D array..it provide index

#saving the dataframe
df.to_csv('pnew.csv') #to_csc(file name)-> coverts it into csv file...always use dataframe when converting
'''
'''
#csv file from dictionaries/lists using numpy
rows =[['anmol' ,'ceo','2'],
       ['tarfa' ,'prime minister','2'],
       ['marwa' ,'cs','2'],
       ['tehreem' ,'cs','2'],]

#from the numpy module
np.savetxt("nnew.csv",rows,delimiter=",", fmt='%s')

# delimiter make comma separated file
#savetxt is used in numpy to save the file, as dataform was used
#fmt represents format to save as string(%S)

def inputdata():
       with open('temperature.csv','w', newline='')as csvfile: #when using with open func,must call an object
              w = csv.writer(csvfile,delimiter=' ')
              save="y"
              while save == "y":
                     temperature= input("enter the temperature: ")
                     windspeed= input("enter the wind speed: ")

                     save=input("would you like to save Y/N: ")
                     if save.lower()=="y":
                            w.writerow([temperature,windspeed])
                            print("---saved--")
                     save=input("would you like make another entry? Y/N: ")
              print("program closed.")


inputdata()
df=pd.read_csv('temperature.csv')
print(df)

'''
'''
#reading the iris file using pandas
df=pd.read_csv("Iris (3).csv")

print(df)
#to print start of a data
print(df.head())
#to print end of a data
print(df.tail())
'''

'''
#reading iris with reader function
filename='Iris (3).csv'
with open(filename,mode='r') as file:
    f=csv.reader(file)
    for lines in f:
        print(lines)
'''
'''
#reading file using numpy
arr = np.loadtxt('Iris (3).csv',delimiter=',',dtype=str)

#print(arr)
print(arr.shape) #shape tell no of rows and columns (dimensions of data set)
nm=arr.dtype.name #name of data type
print(nm)
b=arr.ndim #number of array dimension
print(b)
s=arr.size #no of array elements
print(s)
#extracting columns
sp=arr[:,1:3] #values after comma gives column
print(sp)

#extracting rows
select_rows=arr[0:2 ,:] #values before comma gives rows
print(select_rows)

#arrange

#arange=np.arange(arr,0,6.2)
#print(arange)

#sort
sss=np.sort(arr)
print(sss)

#ma=np.max(arr)
#print(ma)


print(min(arr))
'''
#accessing file using pandaasssssss


#dataset= pd.read_csv('Iris (3).csv')
#df= pd.DataFrame(dataset)
#print(df)
#print(df.head(10))
'''
#no of rows
df1=df[3:10]
print(df1)

#no of column
pl=df["PetalLengthCm"]
print("only petal length column",pl.head()) #print only head

#no of rows through shape func
print(df["PetalLengthCm"].shape)

#extracting multiple columns
ttt=df[["PetalLengthCm","SepalLengthCm"]]
print(ttt)

print(ttt.head())
print(ttt.median())

print(ttt.mean())
print(ttt.mode())
print("median:",ttt.median())

#calculate the mean of each numeric column
print("only numeric",df.mean(numeric_only=True))

#calculate the median of each numeric column
print(df.median(numeric_only=True))
#calculate mode
print(df.mode(numeric_only=True))
#sum of numeric columns
print("sum: ", df.sum())
# description of numeric data set(mean,mode,standard deviation)
print("statistical description",df.describe())

#inluding non-numeric values in output
print(" categories",df.describe(include=['object']))
print(" categories1",df.describe(include='all'))
#first method--- to tell how many categories are there
uc= set(df['Species'])
print(uc)
#second method---
print(df['Species'].unique())
'''


'''
#---Graphs----
#scatter plot
import matplotlib.pyplot as plt
dataset= pd.read_csv('Iris (3).csv')
df= pd.DataFrame(dataset)


#create scatter plot
plt.scatter(df['SepalLengthCm'],df['PetalLengthCm'])
#name x axis
plt.xlabel('SepalLengthCm')
#name y axis
plt.ylabel('PetalLengthCm')
#name the plot
plt.title("scatterplot")
#add gridlines
plt.grid()
plt.show()
'''
'''
#adding colors with respect to species
colors={'Iris-setosa':'r','Iris-virginica':'g','Iris-versicolor':'b'}
#create figure and exists
fig, ax= plt.subplots()
#plot for each data point
for i in range(len(df['SepalLengthCm'])):
    ax.scatter(df['SepalLengthCm'][i], df['SepalWidthCm'][i], color=colors[df['Species'][i]])
ax.set_title('iris dataset')
ax.set_xlabel('sepal length')
ax.set_ylabel('sepal width')
#ax.legend()
plt.show()
'''

import matplotlib.pyplot as plt
import seaborn as sns
dataset= pd.read_csv('Iris (3).csv')
df= pd.DataFrame(dataset)

'''
#used to explain what kind of variables we have,show the whole dataset
#scatter plot
#using seaborn library----used to visiualize the whole dataset
#create scatter plot
#style used as a theme of graph

sns.set(style="ticks")
#sns.FaceGrid(df, hue='Species',height = 6).map(plt.scatter,'SepalLengthCm','PetalLengthCm')
#hue->categories data 
sns.pairplot(df,hue='Species')
plt.show()

#count plot
#plot this graph in your project-- replace species with days
sns.countplot(x="Species", data = df)
plt.show()
'''

'''
def scatter2d(x1,x2):
    sns.scatterplot(x=x1, y=x2, hue="Species", data=df)
    plt.legend()
    plt.show()

x1= 'PetalLengthCm'
x2= 'PetalWidthCm'
scatter2d(x1,x2)
'''

'''
def scatter3d(x1,x2,x3):
    fig=plt.figure(figsize=(8,6))
    ax=fig.add_subplot(111,projection='3d')
    ax.set_xlabel(x1.name)
    ax.set_ylabel(x2.name)
    ax.set_zlabel(x3.name)
    ax.scatter(x1, x2, x3, cmap='viridis')
    #plt.legend()
    plt.show()

x1=df['SepalLengthCm']
x2=df['SepalWidthCm']
x3=df['PetalLengthCm']
#y=df['Species']
scatter3d(x1,x2,x3)
'''
'''
#heat map is used to specify correlation
#drop 1 column using axis=1
dc=df.drop(['Id','Species'],axis=1)  #axis represents column
#annot means annotations (comments in graph)
sns.heatmap(dc.corr(),annot=True,cmap='viridis')
plt.show()
'''
'''
#bar plot
#sns.barplot(data=df,x='Species',y='SepalLengthCm')
#plt.show()

#boxplot
sns.boxplot(x="Species",y="PetalLengthCm",palette="husl",data=df)
plt.show()
#violinplot
sns.violinplot(x="Species",y="PetalLengthCm",palette="husl",data=df)
plt.show()
#swarmplot
sns.violinplot(x="Species",y="PetalLengthCm",palette="husl",data=df)
sns.swarmplot(x="Species",y="PetalLengthCm",data=df,color='w',alpha=0.9)
plt.show()



#boxplot2
sns.boxplot(x="Species",y="SepalWidthCm",palette="husl",data=df)
plt.show()
#violinplot
sns.violinplot(x="Species",y="SepalWidthCm",palette="husl",data=df)
plt.show()
#swarmplot
sns.violinplot(x="Species",y="SepalWidthCm",palette="husl",data=df)
sns.swarmplot(x="Species",y="SepalWidthCm",data=df,color='w',alpha=0.9)
plt.show()



#pichart
data=(150,150,150)
class_label=(('Iris-setosa','Iris-virginica','Iris-versicolor'))
colors=sns.color_palette('pastel')[0:3]
plt.pie(data,labels=class_label,colors=colors,autopct='%.f%%')
plt.show()


#donutchart
data=(150,150,150)
class_label=['Iris-setosa','Iris-virginica','Iris-versicolor']
plt.pie(data)
#makin donut chart from pie chart
my_circle=plt.Circle((0,0),0.7,color='white')
#give color names
plt.rcParams['text.color']='red'


plt.pie(data,labels=class_label,colors=['red','green','blue'])
#adding data labels
p=plt.gcf()
p.gca().add_artist(my_circle)
plt.show()
'''
#line chart
sns.lineplot(data=df, x="Species",y= "SepalLengthCm")
plt.show()








