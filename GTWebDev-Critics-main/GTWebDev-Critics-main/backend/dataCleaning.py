import pandas as pd
import numpy as np
import warnings
warnings.filterwarnings('always')
warnings.filterwarnings('ignore')
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.compose import make_column_transformer

restaurant_data = pd.read_csv("/Users/chanwookim/Desktop/WebDev_Critics/GTWebDev-Critics/backend/data.csv")
restaurant_data.head()

#dropping useless columns
restaurant = restaurant_data.drop(['url', 'id', 'alias', 'is_closed', 'categories/0/alias', 'phone', 'coordinates/latitude', 'coordinates/longitude', 'categories/1/alias', 'location/country', 'location/state', 'phone', 'image_url',
                                  'categories/1/title', 'categories/2/alias', 'transactions/1', 'categories/2/title', 'transactions/1', 'location/address2', 'location/address3', 'location/display_address/2', 'location/display_address/0',
                                  'location/display_address/1'], axis=1)
restaurant.duplicated().sum()
restaurant.drop_duplicates(inplace=True)

#Remove the NaN values from the dataset 
restaurant.isnull().sum()

#changing the column names 
restaurant = restaurant.rename(columns={'categories/0/title':'categories', 'location/city':'city', 'location/zip_code':'zip_code', 
                                      'location/country':'country', 'display_phone':'phone', 'location/address1':'address', 'transactions/0':'pick_up_or_delivery'})


restaurant = restaurant.sort_values(by='distance', na_position='first')
restaurant = restaurant.reset_index(drop=True)
restaurant = restaurant.drop([17])
restaurant = restaurant.reset_index(drop=True)

df_percent = restaurant.sample(frac=1.0)

## it holds any data type supported in Python and uses labels to locate each data value
indices = pd.Series(df_percent.index)

tfidf = TfidfVectorizer(analyzer='word', ngram_range=(1, 2))
tfidf.fit(df_percent['categories'])

tfidf_matrix = tfidf.fit_transform(df_percent['categories'])
tfidf_matrix.shape

from sklearn.metrics.pairwise import cosine_similarity

cosine_sim = cosine_similarity(tfidf_matrix)
cosine_sim_df = pd.DataFrame(cosine_sim, index=df_percent['name'], columns=df_percent['name'])

cosine_sim_df.sample(14, axis=1).round(2)


def recommendations(category, M, items, k=10):
    # Filter items by category
    filtered_items = items[items['categories'] == category]
    return filtered_items




