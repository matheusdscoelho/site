  
  export const sortByYear = <T extends { year: string }>(data: T[]) => {
    return data.sort((a, b) => {
      const getYearValue = (year: string) => {
        const parts = year.split('-');
        
        if (parts.length === 2) {
          return parseInt(parts[0], 10);
        }
        
        if (parts[1] === 'Present') {
          return parseInt(parts[0], 10);
        }
        
        return parseInt(year, 10);
      };
  
      const yearA = getYearValue(a.year);
      const yearB = getYearValue(b.year);
  
      return yearA - yearB;
    });
  };