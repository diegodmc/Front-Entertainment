import React, { useState, useEffect } from 'react';
export const TOKEN_KEY = "@airbnb-Token";
const NotFound = () => {

  const Exit = async (e,v) => { 
    localStorage.removeItem(TOKEN_KEY);
}
    return(
        <div>{Exit}
        </div>
    )
}
export default NotFound;