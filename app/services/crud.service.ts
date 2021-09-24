import { FilterQuery, Model } from "mongoose";

/** Provides common methods for CRUD services */
export default abstract class CrudService<
  ModelType extends { _id: string },
  InsertModelType,
  UpdateModelType
> {
  // TODO: Change Model<any> to ModelType
  /** @param _model The model used for operations */
  constructor(private _model: Model<any>) {}

  /** Finds all records matching the given filter. Returns all records if no filter is provided
   * @param filter used to filter records
   */
  async find(filter?: FilterQuery<ModelType>) {
    return filter ? await this._model.find(filter) : await this._model.find();
  }

  /** Finds the record matching given filters
   * @param filter filters for the record
   */
  async findOne(filter: FilterQuery<ModelType>) {
    return await this._model.findOne(filter);
  }

  /** Finds the record with the given ID
   * @param id used to find the record
   */
  async findById(id: string) {
    return await this._model.findById(id);
  }

  /** Inserts a record with the given data
   * @param data object containing data of the record
   */
  async insert(user: InsertModelType) {
    const model = await this._model.create(user);
    return await model.save();
  }

  /** Deletes the record with the given ID
   * @param id ID of the object to delete
   */
  async delete(id: string) {
    return await this._model.findById(id).deleteOne();
  }

  /** Updates the record with the given ID
   * @param id ID of the object to update
   * @param data object containing data of the record
   */
  async update(_id: string, data: Partial<UpdateModelType>) {
    return await this._model.updateOne({ _id }, { ...data });
  }
}
