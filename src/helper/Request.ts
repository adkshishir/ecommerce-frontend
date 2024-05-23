async function get(url: string) {
  try {
    const response = await fetch(url,{cache:'no-cache'});
    const data = await response.json();
    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
      data: [],
    };
  }
}
async function post(url: string, formData: any) {
  try {
    const response: Response = await fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    return {
      success: false,
      data: [],
    };
  }
}
export default {
  get,
  post,
};
