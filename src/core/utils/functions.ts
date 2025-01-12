export const isValidColor = (color: string): boolean => {
        const s = new Option().style;
        s.color = color;
        return s.color !== ""; // Si el color es válido, será diferente de una cadena vacía
      };