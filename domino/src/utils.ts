export class Domino {
  private data: number[][];
  private defaultData: number[][];

  constructor(data: number[][]) {
    this.data = [...data];
    this.defaultData = [...data];
  }

  // Show all domino cards
  showCards(): number[][] {
    return this.data;
  }

  // Count double numbers
  countDoubleNumbers(): number {
    return this.data.filter(([a, b]) => a === b).length;
  }

  // Sort cards in ascending order
  sortCardsAsc(): number[][] {
    const sorted = [...this.data].sort((a, b) => {
      const sumA = a[0] + a[1];
      const sumB = b[0] + b[1];
      if (sumA === sumB) {
        return a[0] - b[0];
      }
      return sumA - sumB;
    });
    this.data = sorted;
    return sorted;
  }

  // Sort cards in descending order
  sortCardsDesc(): number[][] {
    const sorted = [...this.data].sort((a, b) => {
      const sumA = a[0] + a[1];
      const sumB = b[0] + b[1];
      if (sumA === sumB) {
        return b[0] - a[0];
      }
      return sumB - sumA;
    });
    this.data = sorted;
    return sorted;
  }

  // Remove duplicate cards
  removeDuplicates(): number[][] {
    const uniqueCards = this.data.filter((card, index, self) => {
      return (
        index ===
        self.findIndex(
          ([a, b]) =>
            (a === card[0] && b === card[1]) || (a === card[1] && b === card[0])
        )
      );
    });
    this.data = uniqueCards;
    return uniqueCards;
  }

  // Flip the cards
  flipCards(): number[][] {
    this.data = this.data.map(([a, b]) => [b, a]);
    return this.data;
  }

  // Remove cards with a certain total number
  removeByTotal(total: number): number[][] {
    this.data = this.data.filter(([a, b]) => a + b !== total);
    return this.data;
  }

  // Reset data
  resetData(): number[][] {
    this.data = [...this.defaultData];
    return this.data;
  }
}

// Contoh Penggunaan
const domino = new Domino([
  [1, 2],
  [1, 1],
  [4, 1],
  [3, 3],
  [6, 1],
]);

console.log("All Cards:", domino.showCards());
console.log("Double Numbers Count:", domino.countDoubleNumbers());
console.log("Ascending Order:", domino.sortCardsAsc());
console.log("Descending Order:", domino.sortCardsDesc());
console.log("Remove Duplicates:", domino.removeDuplicates());
console.log("Flip Cards:", domino.flipCards());
console.log("Remove Cards with Total 4:", domino.removeByTotal(4));
console.log("Reset Data:", domino.resetData());
