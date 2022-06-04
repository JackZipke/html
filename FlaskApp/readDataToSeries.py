import pandas as pd

def readDataToSeries():
    df = pd.read_csv("dailyData.csv")
    print(df)

    time = df["time"].tolist()

    headers = list(df.columns.values)
    series = []
    for header in headers:
        data = df[header].tolist()
        json = {
            "name": header,
            "data": data
        }
        series.append(json)

    return series       
