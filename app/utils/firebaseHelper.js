export const snapshotToArray = (snapshot) => {
  let returnArray = [];
  snapshot.forEach((childSnapshot) => {
    const item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArray.push(item);
  });

  return returnArray;
}
