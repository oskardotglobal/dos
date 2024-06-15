export interface Serializable<T, SerializableT> {
    serialize(): SerializableT;
    /**
     * @static
     * Call with T.prototype.serialize(). DO NOT CALL ON INSTANCES
     */
    deserialize(value: SerializableT): T;
}