async function get(url: string, token?: string) {
  try {
    const response = await fetch(url, {
      cache: 'no-cache',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
async function post(url: string, formData: any, token?: string) {
  try {
    const response: Response = await fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
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
async function deleteReq(url: string, token?: string) {
  try {
    const response: Response = await fetch(url, {
      method: 'DELETE',
      cache: 'no-cache',
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
  delete: deleteReq,
};
