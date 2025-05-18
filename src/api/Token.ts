const getToken = (): string | null => {
  const token = localStorage.getItem("token");
  return token || null;
};

const setToken = (token: string): boolean => {
  if (!token) {
    return false;
  }
  localStorage.setItem("token", token);
  console.log(token);
  return true;
};

const delToken = (): void => {
  localStorage.removeItem("token");
};

export { getToken, setToken, delToken };
