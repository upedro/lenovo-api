import mongoose, { Document, Schema } from 'mongoose';

const opts = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};

export const NotebookSchema = new Schema(
  {
    description: { type: String, required: true },
    level: {
      type: Number,
      required: true,
      min: [1, 'Min level is 1'],
      max: [5, 'Max level is 5'],
    },
  },
  opts,
);

export type Notebook = Document & {
  id: string;
  description: string;
  level: string;
  createdAt?: Date;
};
export default mongoose.model<Notebook>('Notebook', NotebookSchema);
