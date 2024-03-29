/*
There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

Examples
mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free
*/
function mango(quantity, price){
    //harder than I thought - had to set remainders for each situation and add back in a unit(s)
    return  quantity%3==0? quantity*(2/3)*price:
            quantity%3==1? ((quantity-1)*(2/3)*price)+price:
            ((quantity-2)*(2/3)*price)+2*price;
  }
  console.log(mango(25,5))
