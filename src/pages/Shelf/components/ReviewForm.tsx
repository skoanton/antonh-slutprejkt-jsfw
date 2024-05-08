import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useContext } from "react";
import { ShelfContext } from "@/Context/ShelfContext/ShelfContext";
import { Review } from "@/types/bookType";
import { z } from "zod";
import { SHELF_ACTION } from "@/Context/ShelfContext/ShelfReducer";
import { useParams } from "react-router-dom";

type ReviewFormProps = {};

const reviewSchema = z.object({
  text: z
    .string()
    .min(10, "At least 10 characters")
    .max(70, "Max 70 characters"),
  rating: z.coerce
    .number()
    .min(1, "Rating must be between 1 and 5")
    .max(5, "Rating must be between 1 and 5"),
  pages: z.coerce.number().min(1, "Number of pages must be greater then 1"),
});

const ReviewForm = ({}: ReviewFormProps) => {
  const { shelfState, shelfDispatch } = useContext(ShelfContext);

  const params = useParams<{ bookId: string }>();
  console.log("Current book id", params.bookId);

  const currentReview = shelfState.review.find(
    (review) => review.id === params.bookId
  );

  const reviewForm = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
    mode: "onSubmit",
    values: {
      text: currentReview?.text || "",
      rating: currentReview?.rating || 1,
      pages: currentReview?.pages || 1,
    },
  });

  const onSubmit = (data: z.infer<typeof reviewSchema>) => {
    console.log(data);
    if (params.bookId) {
      const reviewWithId: Review = { ...data, id: params.bookId };
      if (!currentReview) {
        console.log("reviewtiwhid: ", reviewWithId);
        shelfDispatch({
          type: SHELF_ACTION.ADD_REVIEW,
          payload: reviewWithId,
        });
      } else {
        shelfDispatch({
          type: SHELF_ACTION.UPDATE_REVIEW,
          payload: reviewWithId,
        });
      }
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Leava a review</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary-foreground">
              Please leave a review
            </DialogTitle>
            <DialogDescription>Leave a review on your book</DialogDescription>
          </DialogHeader>
          <Form {...reviewForm}>
            <form
              onSubmit={reviewForm.handleSubmit(onSubmit)}
              className="space-y-8 w-full "
            >
              <FormField
                control={reviewForm.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary-foreground">
                      Your Book Review
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="text-primary-foreground"
                        {...field}
                        autoComplete="off"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={reviewForm.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary-foreground">
                      Your Rating
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="text-primary-foreground"
                        {...field}
                        autoComplete="off"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={reviewForm.control}
                name="pages"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary-foreground">
                      How many pages?
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="text-primary-foreground"
                        type="number"
                        {...field}
                        autoComplete="off"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter className="sm:justify-end">
                <Button type="submit">Save</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ReviewForm;
