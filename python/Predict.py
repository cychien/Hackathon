#!/usr/bin/env python
# coding: utf-8

# In[7]:


import os
import pickle

from flask import Flask, jsonify, request
app = Flask(__name__)

ROOMS = {
    '101': (0, 3),
    '102': (3, 5),
    '103': (5, 7),
    '808': (7, 10),
    '14': (10, 13),
}

@app.route('/predict_all')
def predict_all():
    result = []
    data = request.args.get('data', type = str)  # current values list
    data = [float(x) for x in data.split(',')]

    for pos in [
        '101-1', '101-2', '101-3', '102-1', '102-2', '103-1', '103-2',
        '808-1', '808-2', '808-3', '14-1', '14-2','14-3'
    ]:
        for room, index in ROOMS.items():
            if pos.startswith(room):
                x_data = data[index[0]: index[1]]
                break
        
        loaded_model = pickle.load(open(os.path.join('models', pos), 'rb'))
        result.append(loaded_model.predict([x_data])[0])
    
    return jsonify({ 'result': result})

@app.route('/predict')
def predict():
    pos = request.args.get('pos', type = str)
    data = request.args.get('data', type = str)  # current values list
    data = [float(x) for x in data.split(',')]
    
    for room, index in ROOMS.items():
        if pos.startswith(room):
            data = data[index[0]: index[1]]
            break
    
    loaded_model = pickle.load(open(os.path.join('models', pos), 'rb'))
    result = loaded_model.predict([data])
    
    return jsonify({ 'result': result[0]})


if __name__ == '__main__':
    app.run()
