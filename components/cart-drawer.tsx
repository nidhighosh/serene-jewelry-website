"use client"

import { useCart } from "@/lib/cart-context"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import Image from "next/image"

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } =
    useCart()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="bg-background border-border flex flex-col">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="font-serif text-xl text-foreground flex items-center gap-2">
            <ShoppingBag size={20} className="text-primary" />
            Your Bag ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
            <ShoppingBag size={48} className="text-muted-foreground/40" />
            <div>
              <p className="font-serif text-lg text-foreground">Your bag is empty</p>
              <p className="text-sm text-muted-foreground mt-1">
                Add some pieces to get started.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 rounded-xl bg-card"
                >
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={item.product.image || "/placeholder.svg"}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between min-w-0">
                    <div>
                      <h4 className="font-serif text-sm font-medium text-foreground truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {"\u20B9"}{item.product.price.toLocaleString("en-IN")}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="h-7 w-7 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm text-foreground w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="h-7 w-7 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.product.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  Total
                </span>
                <span className="font-serif text-lg text-foreground">
                  {"\u20B9"}{totalPrice.toLocaleString("en-IN")}
                </span>
              </div>
              <button
                type="button"
                className="w-full py-3 rounded-full bg-primary text-primary-foreground text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
