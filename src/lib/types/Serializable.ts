export interface Serializable<T> {
    serialize(): string;
    /**
     * @static
     * Call with T.prototype.serialize(). DO NOT CALL ON INSTANCES
     */
    deserialize(value: string): T;
}