import pandas as pd

def readDataToSeries():
    df = pd.read_csv("dailyData.csv")

    headers = list(df.columns.values)
    time = []
    batSOC = []
    series = []
    
    for header in headers:
        data = df[header].tolist()
        if header == "time":
            time = data
        elif header == "batSOC":
            batSOC = data
        else:
            json = {
                "name": header,
                "data": data
            }
            series.append(json)

    return time, batSOC, series       
