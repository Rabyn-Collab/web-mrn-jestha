import { Button, IconButton } from "@material-tailwind/react";
import { useRemoveArticleMutation } from "./articleApi.js"
import toast from "react-hot-toast";

export default function RemoveArticle({ id }) {
  const [removeArticle, { isLoading }] = useRemoveArticleMutation();

  const handleRemove = async () => {
    try {
      await removeArticle(id).unwrap();
      toast.success('removed successfully');
    } catch (err) {
      toast.error(`${err.data}`)

    }
  }

  return (
    <div>

      <Button
        onClick={handleRemove}
        loading={isLoading} className="px-3" size="sm" color="pink">
        <i className="fas fa-trash" />
      </Button>

    </div>
  )
}
