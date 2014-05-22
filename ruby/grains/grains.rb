require 'pry'
class Grains
  def initialize
    build_grains
  end
  def square(position)
    @grains[position]
  end
  def total
    @grains.values.reduce(:+)
  end
  def build_grains
    @grains = {1 => 1}
    (2..64).each_with_index{|n,i| @grains[n] = @grains[n-1] * 2 }
  end
end