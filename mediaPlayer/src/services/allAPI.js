import commonAPI from "./commonAPI";
import serverUrl from "./baseURL";


// upload video API must called by add component

export const uploadVideoAPI = async(uploadVideo) => {
    return await commonAPI("POST", `${serverUrl}/allVideos`, uploadVideo)
  }
  

// get all videos API must called by view component
export const getAllVideoAPI = async ()=>{
  return await commonAPI("GET", `${serverUrl}/allVideos`,"")
}

// store watch history Api must called by videocard
export const storeHistoryAPI = async (videoDetails)=>{
  return await commonAPI("POST", `${serverUrl}/history`, videoDetails)

}


// gethistory api must called histrory component
export const getHistoryAPI = async ()=>{
  return await commonAPI("GET", `${serverUrl}/history`, "")
}

// removehistoryAPI called history component
export const removeHistoryAPI =async (historyId)=>{
  return await commonAPI("DELETE", `${serverUrl}/history/${historyId}`, {})
}


// remove video api called by videocard component

export const removeVideoAPI = async (videoID)=>{
  return await commonAPI("DELETE", `${serverUrl}/allVideos/${videoID}`, {})

}

// add category api

export const addCategoryAPI = async (categoryDetails)=>{
  return await commonAPI("POST", `${serverUrl}/categories`,categoryDetails)

}

// getallcategory api
export const getCategoryAPI = async ()=>{
  return await commonAPI("GET", `${serverUrl}/categories`,"")

}

// removecategories api
export const removeCategoryAPI = async (categoryId)=>{
  return await commonAPI("DELETE", `${serverUrl}/categories/${categoryId}`, {})

}

// get single videos API must called by view component
export const getSingleVideoAPI = async (id)=>{
  return await commonAPI("GET", `${serverUrl}/allVideos/${id}`, "")

}

// update category api
export const updateCategoryAPI = async (categoryId,categoryDetails)=>{
  return await commonAPI("PUT", `${serverUrl}/categories/${categoryId}`, categoryDetails)

}

// get single category API
export const getSingleCategoryAPI = async(id)=>{
  return await commonAPI("GET",`${serverUrl}/categories/${id}`,"")
}