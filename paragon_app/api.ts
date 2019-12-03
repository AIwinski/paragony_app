import AsyncStorage from '@react-native-community/async-storage';

const API_URL = "";

const storeToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('@auth_token', token)
  } catch (e) {
  }
}

const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('@auth_token')
    if(value !== null) {
      return value;
    }
  } catch(e) {
  }
}

const appendTokenToRequestOptions = (options: any) => {
  const update = { ...options };
  const token = await getToken();
  if (token) {
    update.headers = {
      ...update.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return update;
}
