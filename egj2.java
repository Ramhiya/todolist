def rotate_array(arr, rotation_count):
    # Calculate effective rotation count
    rotation_count %= len(arr)

    # Rotate array using slicing
    rotated_array = arr[-rotation_count:] + arr[:-rotation_count]

    return rotated_array
