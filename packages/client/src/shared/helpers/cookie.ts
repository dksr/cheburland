export const getCookie = (field: string, cookies = ''): string => {
  const cookieArr = document.cookie.split(';')

  for (let i = 0; i < cookieArr.length; i++) {
    const cookiePair = cookieArr[i].split('=')

    if (field === cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1])
    }
  }

  // Return null if not found
  return ''

  // const cookieValue = (document.cookie ? document.cookie : cookies).split('; ').find(cookie => {
  //   const [key, value] = cookie.split('=')
  //   return key === field ? decodeURIComponent(value) : ''
  // })

  // return cookieValue

  // const cookieValue = document.cookie
  // .split("; ")
  // .find((row) => row.startsWith("test2="))
  // ?.split("=")[1];

  // let name = cname + "=";
  // let decodedCookie = decodeURIComponent(document.cookie);
  // let ca = decodedCookie.split(';');
  // for(let i = 0; i <ca.length; i++) {
  //   let c = ca[i];
  //   while (c.charAt(0) == ' ') {
  //     c = c.substring(1);
  //   }
  //   if (c.indexOf(name) == 0) {
  //     return c.substring(name.length, c.length);
  //   }
  // }
  // return "";
}

export const setCookie = (field: string, value: string): void => {
  document.cookie = `${field}=${encodeURIComponent(value)}`
}
