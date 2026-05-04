type UserResponse = {
  info?: {
    address?: {
      zipCode?: string
    }
  }
}

const userInfo: UserResponse = {
  info: {
    address: {
      
    }
  }
}

const getZipCode = (response: UserResponse): string => {
  return response?.info?.address?.zipCode ?? '00000'
}

const userZip = getZipCode(userInfo);
console.log(userZip);