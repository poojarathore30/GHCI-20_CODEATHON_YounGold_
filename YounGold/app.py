from __future__ import division, print_function
# coding=utf-8
import sys
import os
import glob
import re
import numpy as np
import pandas as pd
import csv
import pymongo
from pymongo import MongoClient

# Flask utils
from flask import Flask, redirect, url_for, request, render_template
from werkzeug.utils import secure_filename
from gevent.pywsgi import WSGIServer
import pymongo
from pymongo import MongoClient
from pprint import pprint
from pandas import DataFrame


FOLDER = os.path.join('static','images')
# Define a flask app
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = FOLDER


print('Model loaded. Check http://127.0.0.1:5000/')


def model_predict(Domain,Age,Purpose, Hobbies):#, classifier):
        client = pymongo.MongoClient("mongodb+srv://Nikita:Nikita@cluster0.agywt.mongodb.net/YounGold?retryWrites=true&w=majority")

        db = client["test"]
        mycol = db["users"]
        cursor = db.users.find()
        list_cur = list(cursor)
        
        # Converting to the DataFrame 
        df1 = DataFrame(list_cur) 
        print('Type of df:',type(df1))
        print(df1.head())
        #print((df1.iloc[:1].get('_id')).astype("string")[0])
        print("Typeeeeeeeeeeeee",type(df1.iloc[:1].get('_id')))
       
        print(Domain,Age,Purpose, Hobbies)
        text = ""
        Result = {'1':"","2":"","3":"","4":"","5":"","6":""}
        
        if(len(Age) == 0 or len(Domain)==0 or len(Purpose)==0 or len(Hobbies)==0):
                return {'1':"No output","2":"No output","3":"No output"}
        else:
                Age = int(Age)

        df1 = df1.drop('password',axis=1)


        ######GROUPING BASED ON PURPOSE
        def grouping_purpose(df,Purpose):
            if(Purpose == "Get Help"):
                k = df[df['purpose'] == "Help"]

                if(len(k)==0):
                    k = df[df['purpose'] == "Both"]
                return k
            
            elif(Purpose == "Help"):
                k = df[df['purpose'] == "Get Help"]
                if(len(k)==0):
                    k = df[df['purpose'] == "Both"]
                return k
                 
            elif(Purpose == "Both"):
                k = df[df['purpose'] == "Both"]
                
                if(len(k)==0):
                    k = df[df['purpose'] == "Help"]
                return k
            
        ######GROUPING BASED ON AGE
        
        if(Age>=28):
            df = df1[df1['age'] < 28]
            if(len(df)==0):
                df = df1[df1['age'] >= 28]
                if(len(df)==0):
                    return {'1':"No output","2":"No output","3":"No output"}
            k = grouping_purpose(df,Purpose)
               
        else:
            df = df1[df1['age'] >= 28]
            if(len(df)==0):
                df = df1[df1['age'] < 28]
                if(len(df)==0):
                    return {'1':"No output","2":"No output","3":"No output"}
            k = grouping_purpose(df,Purpose)
              


        k.drop(k.columns[k.columns.str.contains('Unnamed',case = False)],axis = 1, inplace = True)
        k = k[k.columns.dropna()]

       
        kx = k[k['domain'] == Domain]
        kx.drop(kx.columns[kx.columns.str.contains('Unnamed',case = False)],axis = 1, inplace = True)
        kx = kx[kx.columns.dropna()]
        kx.to_csv("Finalll.csv")


        Hobb = pd.read_csv("Finalll.csv")
        Hobb = Hobb.drop('domain',axis=1)
        Hobb = Hobb.drop('purpose',axis=1)

        Hobb['Score'] = 0
        print(list(Hobb.columns))
        for i in range(len(Hobb)):
            for j in Hobbies:
                if j in Hobb.hobbies[i]:
                    Hobb.Score[i]+=1


        Hobb.drop(Hobb.columns[Hobb.columns.str.contains('Unnamed',case = False)],axis = 1, inplace = True)
        Hobb = Hobb[Hobb.columns.dropna()]

        dfres1 = Hobb[Hobb['Score'] == 3]
        dfres1.sample(frac=1)

        dfres2 = Hobb[Hobb['Score'] == 2]
        dfres2.sample(frac=1)

        dfres3 = Hobb[Hobb['Score'] == 1]
        dfres3.sample(frac=1)

        dfres4 = Hobb[Hobb['Score'] == 0]
        dfres4.sample(frac=1)

        count = 0

        dfres1.drop(dfres1.columns[dfres1.columns.str.contains('Unnamed',case = False)],axis = 1, inplace = True)
        dfres1 = dfres1[dfres1.columns.dropna()]
        dfres1 = dfres1.sample(frac=1)

        dfres2.drop(dfres2.columns[dfres2.columns.str.contains('Unnamed',case = False)],axis = 1, inplace = True)
        dfres2 = dfres2[dfres2.columns.dropna()]
        dfres2 = dfres2.sample(frac=1)
        
        dfres3.drop(dfres3.columns[dfres3.columns.str.contains('Unnamed',case = False)],axis = 1, inplace = True)
        dfres3 = dfres3[dfres3.columns.dropna()]
        dfres3 = dfres3.sample(frac=1)
        
        dfres4.drop(dfres4.columns[dfres4.columns.str.contains('Unnamed',case = False)],axis = 1, inplace = True)
        dfres4 = dfres4[dfres4.columns.dropna()]
        dfres4 = dfres4.sample(frac=1)
        
        
        while count<3:
            if(len(dfres1)>1):
                print("RECOMMENDATION "+str(count+1))
                print("Name - "+dfres1.iloc[:1].name.values[0])
                print("Email - " + dfres1.iloc[:1].email.values[0])
                print("Age - " + str(dfres1.iloc[:1].age.values[0])+"\n")
                text += "\nRECOMMENDATION "+str(count+1)+"\n"+"name - "+dfres1.iloc[:1].Name.values[0]+"\n"+"email - " + dfres1.iloc[:1].Email.values[0]+"\n"+"age - " + str(dfres1.iloc[:1].age.values[0])+"\n"
                Result[str(count+1)]="Name - "+dfres1.iloc[:1].name.values[0]+"\n"+"Email - " + dfres1.iloc[:1].email.values[0]+"\n"+"Age - " + str(dfres1.iloc[:1].age.values[0])+"\n"                
                trying = dfres1.iloc[:1].get('_id').to_frame()
                ndex = trying.loc[trying.index[0], '_id']
                print(count,ndex)#["_id"][0])
                Result[str(count+4)] =ndex
                
                dfres1 = dfres1.drop(dfres1.index[0])
                count+=1
                
            elif(len(dfres2)>1):
                print("RECOMMENDATION "+str(count+1))
                print("Name - "+dfres2.iloc[:1].name.values[0])
                print("Email - " +dfres2.iloc[:1].email.values[0])
                print("Age - " + str(dfres2.iloc[:1].age.values[0])+"\n")
                text += "\nRECOMMENDATION "+str(count+1)+"\n"+"Name - "+dfres2.iloc[:1].name.values[0]+"\n"+ "Email - " +dfres2.iloc[:1].email.values[0]+"\n"+ str(dfres2.iloc[:1].age.values[0])+"\n"                                                                                                                                         
                Result[str(count+1)]="Name - "+dfres2.iloc[:1].name.values[0]+"\n"+ "Email - " +dfres2.iloc[:1].email.values[0]+"\n"+ str(dfres2.iloc[:1].age.values[0])+"\n"
                trying = dfres2.iloc[:1].get('_id').to_frame()
                ndex = trying.loc[trying.index[0], '_id']
                #print(trying["_id"][ndex])
                print(count,ndex)
                #["_id"][0])
                Result[str(count+4)] =ndex
                dfres2 = dfres2.drop(dfres2.index[0])
                count+=1
                
            elif(len(dfres3)>1):
                print("RECOMMENDATION "+str(count+1))
                print("Name - "+dfres3.iloc[:1].name.values[0])
                print("Email - " + dfres3.iloc[:1].email.values[0])
                print("Age - " + str(dfres3.iloc[:1].age.values[0])+"\n")
                text += "\nRECOMMENDATION "+str(count+1)+"\n"+"Name - "+dfres3.iloc[:1].name.values[0]+"\n"+ "Email - " + dfres3.iloc[:1].email.values[0]+"\n"+ str(dfres3.iloc[:1].age.values[0])+"\n"                                                                                                                                        
                Result[str(count+1)]="Name - "+dfres3.iloc[:1].name.values[0]+"\n"+ "Email - " + dfres3.iloc[:1].email.values[0]+"\n"+ str(dfres3.iloc[:1].age.values[0])+"\n"
                trying = dfres3.iloc[:1].get('_id').to_frame()
                ndex = trying.loc[trying.index[0], '_id']
                #print(trying["_id"][ndex])
                print(count, ndex)
                #["_id"][0])
                Result[str(count+4)] =ndex
                dfres3= dfres3.drop(dfres3.index[0])
                count+=1
                
            elif(len(dfres4)>1):
                print("RECOMMENDATION "+str(count+1))
                print("Name - "+dfres4.iloc[:1].name.values[0])
                print("Email - " + dfres4.iloc[:1].email.values[0])
                print("Age - " + str(dfres4.iloc[:1].age.values[0])+"\n")
                text += "\nRECOMMENDATION "+str(count+1)+"\n"+"Name - "+dfres4.iloc[:1].name.values[0]+"\n"+ "Email - " + dfres4.iloc[:1].email.values[0]+"\n"+ str(dfres4.iloc[:1].age.values[0])+"\n"                                                                                                                                        
                Result[str(count+1)]= "Name - "+dfres4.iloc[:1].name.values[0]+"\n"+ "Email - " + dfres4.iloc[:1].email.values[0]+"\n"+ str(dfres4.iloc[:1].age.values[0])+"\n"                
                trying = dfres4.iloc[:1].get('_id').to_frame()
                ndex = trying.loc[trying.index[0], '_id']
                print(count,ndex)#["_id"][0])
                Result[str(count+4)] = ndex  
                dfres4 = dfres4.drop(dfres4.index[0])
                count+=1
                
            else:
                #if(len(k)>0):
                #        dfres1 = k
                #elif(len(df)>0):
                 #       dfres1 = df
                #else:
                Result[str(count+1)]= "Name - "+df.iloc[:1].name.values[0]+"\n"+ "Email - " + df.iloc[:1].email.values[0]+"\n"+ str(df.iloc[:1].age.values[0])+"\n"

                trying = df.iloc[:1].get('_id').to_frame()
                ndex = trying.loc[trying.index[0], '_id']
                #print(trying["_id"][ndex])
                print(count,ndex)
                #["_id"][0])
                Result[str(count+4)] = ndex   
                df = df.drop(df.index[0])
                
                #print("Recommendation Exhausted")
                #text += "\nRecommendation Exhausted"
                #Result[str(count+1)]="Recommendation Exhausted"
                count+=1
        return Result

@app.route('/', methods=['GET'])
def index():
    # Main page
    full_filename = os.path.join(app.config['UPLOAD_FOLDER'],'LOGO.jpg')
    return render_template('index.html',logo = full_filename)


@app.route('/predict', methods=['GET','POST'])
def upload():
        if request.method == 'POST':
                # Get the file from post request
                Domain = request.form['Domain']
                Hobbies = request.form['Hobbies'].split(",")
                Purpose = request.form['purpose']
                Age = request.form['Age']
                
                
              
        preds = model_predict(Domain,Age,Purpose, Hobbies)
        print(preds)
        return preds
        


if __name__ == '__main__':
    #port = int(os.environ.get('PORT', 5000))
    app.run(debug=True)
