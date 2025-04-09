function* paginate(items, pageSize = 3) {
    for (let i = 0; i < items.length; i += pageSize) {
      yield items.slice(i, i + pageSize);
    }
  }
  
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const pages = paginate(data);
  
  console.log(pages.next().value); // [1, 2, 3]
  console.log(pages.next().value); // [4, 5, 6]
  console.log(pages.next().value); // [7, 8, 9]
  console.log(pages.next().value); // undefined