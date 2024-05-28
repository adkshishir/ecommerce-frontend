function groupByType(variants: any) {
    const grouped =
      variants &&
      variants.reduce((acc: any, item: any) => {
        // Check if the type key exists in the accumulator object
        if (!acc[item.type]) {
          acc[item.type] = [];
        }
        // Push the current item into the corresponding type variants
          acc[item.type].push({
              value: item.value,
              productId: item.productId,
              id: item.id
        });
        return acc;
      }, {});

    return grouped;
}
  

export default groupByType